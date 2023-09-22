import NewStudentForm from "@/app/components/NewStudentForm";
import PageContainer from "@/app/components/PageContainer";
import PageTitle from "@/app/components/PageTitle";

export default function Home() {
  return (
    <main>
      <PageContainer>
        <PageTitle title="New Student" />
        <NewStudentForm />
      </PageContainer>
    </main>
  );
}
