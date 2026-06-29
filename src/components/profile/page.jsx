import ProfileCompletion from "@/components/profile/ProfileCompletion";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import SkillsSection from "@/components/profile/SkillsSection";
import ExperienceSection from "@/components/profile/ExperienceSection";
import ResumeUpload from "@/components/profile/ResumeUpload";
import ProfilePreview from "@/components/profile/ProfilePreview";

export default function ProfilePage() {
  return (
    <div
      className="
      grid
      lg:grid-cols-[1fr_350px]
      gap-8
      "
    >
      <div className="space-y-8">
        <ProfileCompletion />

        <PersonalInfoForm />

        <SkillsSection />

        <ExperienceSection />

        <ResumeUpload />
      </div>

      <ProfilePreview />
    </div>
  );
}