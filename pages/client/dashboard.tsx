import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { ClientDashboard } from "@/components/ClientDashboard";

export default function ClientDashboardPage() {
  return <ClientDashboard />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (
    !session ||
    !["COMPANY_ADMIN", "MANAGER", "EMPLOYEE"].includes(session.user.role)
  ) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
