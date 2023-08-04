"use client";
import { Filter } from "../Filter/Filter";
import { Repositories } from "../Repositories/Repositories";
import styles from "../Main/Main.module.css";
import React, { useState } from "react";

import { ResponseTypes, ReposType, OwnerType } from "../../types/types";

const defaultRepos: ResponseTypes = { items: [], total_count: 0 };
export const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkBoxValue, setCheckBoxValue] = useState("");
  const [repos, setRepos] = React.useState<ResponseTypes>(defaultRepos);
  const [state, setState] = React.useState({
    isLoaded: false,
    isRepos: false,
    reposNotFind: false,
  });

  return (
    <div className={styles.main}>
      <Filter
        inputValue={inputValue}
        setInputValue={setInputValue}
        checkBoxValue={checkBoxValue}
        setCheckBoxValue={setCheckBoxValue}
        repos={repos}
        setRepos={setRepos}
        formState={state}
        setState={setState}
        total_count={repos.total_count}
      />
      <div className={styles.mainContainer}>
        {state.reposNotFind ? (
          <div className={styles.reposNotFind}>
            <h3>Нет подходящих по запросу репозиториев</h3>
          </div>
        ) : (
          <Repositories repos={repos} isRepos={state.isRepos} />
        )}
      </div>
    </div>
  );
};
