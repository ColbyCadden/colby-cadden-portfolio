"use client";

import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

interface DocumentPreviewProps {
  title: string;
  documentUrl: string;
  previewImage?: string;
  detail?: string;
}

export function DocumentPreview({
  title,
  documentUrl,
  previewImage,
  detail,
}: DocumentPreviewProps) {
  return (
    <div className="flex w-full min-w-0 gap-3 rounded-lg border border-border-subtle bg-surface-card/30 p-2.5 sm:gap-3.5 sm:p-3">
      <a
        href={documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-[38%] shrink-0 overflow-hidden rounded-md border border-border-subtle bg-white sm:w-[42%]"
        aria-label={`View full ${title.toLowerCase()}`}
      >
        <div className="relative aspect-[4/3] w-full bg-neutral-100">
          {previewImage ? (
            <Image
              src={previewImage}
              alt={`${title} preview`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 40vw, 200px"
            />
          ) : (
            <>
              <iframe
                src={`${documentUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                title={`${title} preview thumbnail`}
                className="pointer-events-none absolute left-0 top-0 h-[850px] w-[1100px] origin-top-left scale-[0.22] border-0"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/20 via-transparent to-transparent pb-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded bg-background/90 px-1.5 py-0.5 text-[9px] font-medium text-text-primary">
                  Open
                </span>
              </div>
            </>
          )}
        </div>
      </a>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-[13px] font-medium leading-snug text-text-primary">
              {title}
            </h4>
            <span className="shrink-0 rounded border border-border-subtle px-1 py-px text-[8px] font-medium uppercase tracking-wider text-text-subtle">
              PDF
            </span>
          </div>
          {detail && (
            <p className="mt-0.5 text-[10px] leading-snug text-text-subtle">
              {detail}
            </p>
          )}
        </div>

        <div className="flex gap-1.5">
          <a
            href={documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-border-strong bg-text-primary px-2 py-1.5 text-[10px] font-medium text-background transition-opacity hover:opacity-90 sm:text-[11px]"
          >
            View
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
          <a
            href={documentUrl}
            download
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-border-subtle px-2 py-1.5 text-[10px] font-medium text-text-muted transition-colors hover:border-border-strong hover:text-text-primary sm:text-[11px]"
          >
            Download
            <Download className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
