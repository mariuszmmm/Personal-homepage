import { useDispatch, useSelector } from "react-redux";
import { GithubIcon } from "./styled";
import { Section } from "../Section";
import { Text } from "../Text";
import { Header, PortfolioHeader } from "./styled";
import {
  fetchRepositories,
  selectRepositories,
  selectState,
} from "../../personalHomepageSlice";
import { useEffect } from "react";
import { Content } from "./Content";
import { personData } from "../personData";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectState);
  const repositories = useSelector(selectRepositories);
  const { githubData } = personData;

  useEffect(() => {
    dispatch(fetchRepositories(githubData));
  }, [dispatch, githubData]);

  return (
    <Section $portfolio>
      <PortfolioHeader>
        <GithubIcon />
        <Header>Portfolio</Header>
        <Text>My recent projects</Text>
      </PortfolioHeader>
      <Content state={state} repositories={repositories} />
    </Section>
  );
};
