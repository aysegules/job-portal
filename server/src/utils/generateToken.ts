import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export const generateToken = (id: string) => {
  const payload = { id };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "3d",
  });

  return token;
};
