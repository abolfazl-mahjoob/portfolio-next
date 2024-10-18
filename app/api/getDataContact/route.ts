import { NextResponse } from "next/server";
import { join } from "path";
import { promises as fs, PathLike } from "fs";

const readCSVToJSON = async (filePath: PathLike | fs.FileHandle) => {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const [headerLine, ...lines] = fileContent.split("\n");

    const headers = headerLine.split(",").map((header) => header.trim());
    const jsonData = lines
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const values = line.split(",").map((value) => value.trim());
        return headers.reduce(
          (acc: { [key: string]: string | null }, header, index) => {
            acc[header] = values[index] || null;
            return acc;
          },
          {}
        );
      });

    return jsonData;
  } catch (error) {
    console.error("Error reading CSV file:", error);
    throw new Error("Could not read CSV file");
  }
};

export async function POST(request: Request) {
  try {
    const { apiToken } = await request.json();

    if (!apiToken || apiToken !== process.env.API_TOKEN) {
      return NextResponse.json({
        data: "Invalid token",
        status: 403,
      });
    }

    const filePath =
      process.env.CSV_FILE_PATH || join(process.cwd(), "data", "output.csv");
    const jsonData = await readCSVToJSON(filePath);

    return NextResponse.json({
      data: jsonData,
      status: 200,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({
      data: "Internal Server Error",
      status: 500,
    });
  }
}
