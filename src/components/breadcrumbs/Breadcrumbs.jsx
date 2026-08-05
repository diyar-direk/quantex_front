"use client";
import { Link, usePathname } from "@/i18n/navigation";
import "./breadcrumbs.css";
import { sliceText } from "@/utils/sliceText";
import { useMemo } from "react";

/**
 * @typedef {Object} ReplaceItem
 * @property {string} from
 * @property {string} [to]
 * @property {string} [text]
 * @property {boolean} [fullPath=false]
 * @property {boolean} [ignore=false]
 * @property {Object} [props]
 */

/**
 * @typedef {Object} BreadcrumbsProps
 * @property {ReplaceItem[]} [replace]
 */

/**
 * @param {BreadcrumbsProps} props
 */

const Breadcrumbs = ({ replace = [] }) => {
  const pathname = usePathname();
  const pathes = useMemo(() => pathname.split("/").filter(Boolean), [pathname]);

  const className = useMemo(() => `${"home container"} breadcrumbs`, []);

  return (
    <div className={className}>
      <Link href="/"> home </Link>

      {pathes.map((path, i) => {
        const replaceItem = replace.find((item) => item.from === path);

        if (replaceItem?.ignore) return null;

        const pathTo = pathes.slice(0, i + 1);
        const defaultTo = `/${pathTo.join("/")}`;
        const isLast = i === pathes.length - 1;

        let replacedPath;

        if (replaceItem?.to) {
          if (replaceItem.fullPath) replacedPath = replaceItem.to;
          else
            replacedPath = defaultTo.replace(replaceItem.from, replaceItem.to);
        }

        const text = sliceText(replaceItem?.text || path);
        const to = replacedPath || defaultTo;

        return (
          <span key={defaultTo}>
            {isLast ? (
              <span className="current">{text}</span>
            ) : (
              <Link href={to}>{text}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
