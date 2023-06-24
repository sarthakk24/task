import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    // ...add more providers here
    AppleProvider({
      clientId: "",
      clientSecret: "",
    }),
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
};
export default NextAuth(authOptions);
