import type { NextFunction, Request, Response } from "express";
import { ValidationError } from "../errors/ValidationError";
import type { ZodType } from "zod";

export const validate = (schema: ZodType<any, any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      const { fieldErrors, formErrors } = result.error.flatten();
      const allErrors = [
        ...formErrors,
        ...Object.values(fieldErrors).flat().filter(Boolean),
      ];

      throw new ValidationError(allErrors.join(", "));
    }

    const data = result.data;

    req.body = data.body;
    req.params = data.params;

    next();
  };
};
