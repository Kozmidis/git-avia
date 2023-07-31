"use client";
import styles from "../Repositories/Repositories.module.css";
import { Repository } from "../Repository/Repository";
import React from "react";
import { type } from "os";
import { ResponseTypes, ReposType, FormState } from "../../types/types";

type RepositoriesProps = Pick<FormState, "isRepos"> & {
  repos: ResponseTypes;
};
export const Repositories: React.FC<RepositoriesProps> = ({
  repos,
  isRepos,
}) => {
  return (
    <>
      <div className={styles.repositoriesContainer}>
        {isRepos ? (
          repos.items.map((item: ReposType) => (
            <Repository key={item.id} {...item} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
