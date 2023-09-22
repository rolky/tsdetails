import NavigationButton from "../components/NavigationButton";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import StudentTable from "../components/StudentTable";

export default function Home() {
  return (
    <main>
      <PageContainer>
        <PageTitle title="Students" />
        <div className="flex flex-wrap mb-6 justify-end">
          <NavigationButton navTo="/students/new" buttonText="New Student" />
        </div>
        <StudentTable />
      </PageContainer>
    </main>
  );
}
