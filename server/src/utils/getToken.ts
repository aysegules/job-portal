import type { AuthRequest } from "../types/auth.types.ts";

export const getToken = (req: AuthRequest): string | undefined => {
  const authorization = req.headers.authorization;

  if (authorization && authorization.startsWith("Bearer ")) {
    const [_, token] = authorization.split(" ");
    return token;
  } else if (req.cookies?.jwt) {
    return req.cookies.jwt;
  }

  return undefined;
};
