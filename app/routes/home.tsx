import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume AI Check" },
    { name: "description", content: "Check your CV with AI" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar></Navbar>

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resume-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume}></ResumeCard>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
