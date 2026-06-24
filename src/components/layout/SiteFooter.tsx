import { contactContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-16 border-t border-border-subtle pt-14 lg:mt-20 lg:pt-16">
      <SectionHeading title={contactContent.headline} />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-subtle">
            Email
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-[15px] font-medium text-text-primary transition-colors hover:text-accent-blue"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-subtle">
            Location
          </p>
          <p className="mt-2 text-[15px] text-text-muted">{siteConfig.location}</p>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-subtle">
            LinkedIn
          </p>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[15px] font-medium text-text-muted transition-colors hover:text-text-primary"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>

      <p className="mt-10 text-[12px] text-text-subtle">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
