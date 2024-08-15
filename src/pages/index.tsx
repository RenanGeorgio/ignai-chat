import { useRef } from "react";
import { GetServerSideProps } from "next";
import { UserProvider } from "@providers";
import Login from "@components/Auth/signIn";
import { withSSRAuth } from "@middlewares/auth";

export default function Application() {
  const container = useRef<any>(null);
  
  return (
    <div ref={container}>
      <UserProvider>
        <Login src={container} />
      </UserProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {},
  };
});