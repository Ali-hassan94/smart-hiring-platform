import ProfileCompletion from "@/components/profile/ProfileCompletion";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import SkillsSection from "@/components/profile/SkillsSection";
import ExperienceSection from "@/components/profile/ExperienceSection";
import ResumeUpload from "@/components/profile/ResumeUpload";
import ProfilePreview from "@/components/profile/ProfilePreview";
import ProfessionalSummary from "@/components/profile/ProfessionalSummary";
import EducationSection from "@/components/profile/EducationSection";
import CertificateSection from "@/components/profile/CertificateSection";
import LanguageSection from "@/components/profile/LanguageSection";
import ProjectSection from "@/components/profile/ProjectSection";
import SaveProfileButton  from "@/components/profile/SaveProfileButton";
export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
    <div className="grid xl:grid-cols-[1fr_380px] gap-8">

        {/* Left */}

        <div className="space-y-8">

            <ProfileCompletion />

            <PersonalInfoForm />
            <ProfilePreview/>
       

            <ProfessionalSummary />

            <SkillsSection />

            <EducationSection />

            <ExperienceSection />

            <CertificateSection />

            <LanguageSection />

            <ResumeUpload />

            <ProjectSection />

            <SaveProfileButton />

        </div>

        {/* Right */}

        <ProfilePreview />

    </div>
</div>
  );
}