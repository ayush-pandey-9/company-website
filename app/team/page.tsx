import React from "react";
import styles from "./team.module.css";

export default function Team() {
  return (
    <div
      className={`text-white px-5 py-8 ${styles.teamContainer} container mx-auto`}
    >
      <p className="text-4xl md:text-28 lg:text-50 mb-6 font-bold">
        Meet the Team
      </p>
      <p>
        Our team members have honed their skills at industry giants like{" "}
        <span className="font-bold">KPMG</span> and{" "}
        <span className="font-bold">Microsoft</span>. They bring a wealth of
        experience and maybe a few good stories. While we could list every
        Fortune 500 company on their résumés, we'd rather let their work speak
        for itself.
      </p>{" "}
    </div>
  );
}
