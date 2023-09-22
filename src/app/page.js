import NavigationButton from "./components/NavigationButton";
import PageContainer from "./components/PageContainer";
import PageTitle from "./components/PageTitle";
import TeacherTable from "./components/TeacherTable";

export default function Home() {
  return (
    <main>
      <PageContainer>
        <PageTitle title="Teachers" />
        <div className="flex flex-wrap mb-6 justify-end">
          <NavigationButton navTo="/teachers/new" buttonText="New Teacher" />
        </div>
        <TeacherTable />
      </PageContainer>
    </main>
  );
}
