import React,{ useEffect, useState } from "react";
import axios from 'axios';
import { useFetch } from "./hooks/useFetch";

type Repository = {
  name: string;
  description: string;
}

export default function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>('/users/diego3g/repos')

  return (
    <div className="App">
      <ul>
        { isFetching && <p>Carregando...</p> }
        {repositories?.map(repo => {
            return (
              <li key={repo.name}>
                <strong>{repo.name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
