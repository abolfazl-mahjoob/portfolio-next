"use server";

import { join } from "path";
import { promises as fs } from "fs";

const contactForm = async (previousState: unknown, formData: FormData) => {
  const fullname = formData.get("fullname") as string;
  const company = formData.get("company") as string | null;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string | null;
  const message = formData.get("message") as string;

  if (!fullname || fullname == "") {
    return {
      status: 400,
      message: "field are required.",
      error: "fullname",
    };
  }
  if (!email || email == "") {
    return {
      status: 400,
      message: "field are required.",
      error: "email",
    };
  }
  if (!message || message == "") {
    return {
      status: 400,
      message: "field are required.",
      error: "message",
    };
  }

  const filePath =
    process.env.CSV_FILE_PATH || join(process.cwd(), "data", "output.csv");

  try {
    const fileExists = await fs
      .stat(filePath)
      .then(() => true)
      .catch(() => false);
    const csvContent = `${fullname}, ${company || ""}, ${email}, ${
      phone || ""
    }, ${message}\n`;

    if (!fileExists) {
      const header = "Fullname,Company,Email,Phone,Message\n";
      await fs.writeFile(filePath, header + csvContent, "utf8");
      console.log(
        "CSV file has been created and data has been written successfully."
      );
    } else {
      await fs.appendFile(filePath, csvContent, "utf8");
      console.log("Data has been appended successfully.");
    }

    return {
      status: 200,
      message: "Completed",
    };
  } catch (err) {
    console.error("Error writing to file", err);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};

export default contactForm;
