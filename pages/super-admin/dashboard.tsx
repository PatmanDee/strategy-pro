import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { SuperAdminDashboard } from "@/components/SuperAdminDashboard";

export default function SuperAdminDashboardPage() {
  return <SuperAdminDashboard />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session || session.user.role !== "SUPER_ADMIN") {
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
