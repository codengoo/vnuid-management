import { Response } from "express";
import { ValidationError } from "yup";

export async function catcher(res: Response, fnc: () => Promise<void>) {
  try {
    await fnc();
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error);

      return res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
