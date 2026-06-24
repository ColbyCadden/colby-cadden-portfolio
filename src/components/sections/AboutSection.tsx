import Image from "next/image";
import { achievements } from "@/data/achievements";
import { aboutContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/Reveal";
import { AchievementList } from "@/components/ui/AchievementProof";
import { DocumentPreview } from "@/components/ui/DocumentPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border-subtle">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface-base/60 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-normal tracking-[-0.01em] text-text-primary sm:text-3xl">
              {aboutContent.headline}
            </h2>
            <div className="mt-4 h-px w-12 bg-border-strong" />
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted sm:text-base">
              {aboutContent.subheadline}
            </p>
            {aboutContent.identity.map((line) => (
              <p
                key={line}
                className="mt-4 text-[16px] leading-[1.85] text-text-muted lg:text-[17px] lg:leading-[1.8]"
              >
                {line}
              </p>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_minmax(300px,380px)] lg:gap-12">
          <div className="space-y-12 lg:space-y-14">
            <FadeIn delay={0.05}>
              <div>
                <SectionHeading title="Education" level="subsection" />
                <div className="mt-5 space-y-5">
                  {aboutContent.education.map((entry) => (
                    <div
                      key={entry.school}
                      className="flex items-start gap-4 border-l border-border-strong pl-4"
                    >
                      {entry.logo && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/95 p-1.5 sm:h-14 sm:w-14 sm:p-2">
                          <Image
                            src={entry.logo}
                            alt={`${entry.school} logo`}
                            width={48}
                            height={48}
                            className="h-auto w-full object-contain"
                          />
                        </div>
                      )}
                      <div className="min-w-0 pt-0.5">
                        <p className="text-sm font-medium leading-snug text-text-primary">
                          {entry.degree}
                        </p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">
                          {entry.detail
                            ? `${entry.school} · ${entry.detail}`
                            : entry.school}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <SectionHeading title="Achievements" level="subsection" />
                <div className="mt-6">
                  <AchievementList achievements={achievements} />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.08} className="lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto flex max-w-lg flex-col gap-3 lg:mx-0 lg:max-w-none">
              <DocumentPreview
                title="Resume"
                documentUrl={siteConfig.resumeUrl}
                previewImage={siteConfig.resumePreviewImage}
              />
              <DocumentPreview
                title="Reference Letter"
                documentUrl={siteConfig.referenceLetterUrl}
                detail={siteConfig.referenceLetterDetail}
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 border-t border-border-subtle pt-16 lg:mt-20 lg:pt-20">
          <SiteFooter />
        </div>
      </div>
    </section>
  );
}
