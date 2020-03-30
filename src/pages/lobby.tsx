import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Logo from "../components/Logo";
import PageContainer from "../components/PageContainer";
import { Heading1 } from "../components/text";

const Row = styled.div``;

const Lobby: NextPage = () => {
  const router = useRouter();

  const roomCode = router.query.roomCode as string;

  return (
    <PageContainer>
      <Logo />
      <Heading1>{roomCode}</Heading1>
    </PageContainer>
  );
};

export default Lobby;
