import NewTeacherForm from "@/app/components/NewTeacherForm";
import PageContainer from "@/app/components/PageContainer";
import PageTitle from "@/app/components/PageTitle";


export default function Home() {


  return (
    <main>
      <PageContainer>
        <PageTitle title="New Teacher" />
        
       <NewTeacherForm  />
      </PageContainer>
    </main>
  );
}
