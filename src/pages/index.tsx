import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/form/Button";
import TextInput from "../components/form/TextInput";
import Logo from "../components/Logo";
import PageContainer from "../components/PageContainer";
import { Paragraph } from "../components/text";
import FlunkyBallApi from "../lib/api";

const CodeInput = styled(TextInput)`
  text-transform: uppercase;
  margin: 12px 0;
`;

const NameInput = styled(TextInput)`
  margin-bottom: 24px;
`;

const CreateRoom = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 64px;
  padding: 4px;
  cursor: pointer;
`;

const Index: NextPage = () => {
  const router = useRouter();
  const [roomCode, setRoomCode] = useState<string>(null);
  const [name, setName] = useState<string>(null);

  useEffect(() => {
    // const socket = io("http://localhost:8080");
    // socket.on("connect", () => {
    //   console.log(
    //     socket.connected ? "Connected to socket" : "Not connected to socket"
    //   );
    // });
  }, []);

  const createRoom = async () => {
    const api = new FlunkyBallApi();
    const room = await api.createRoom(name);
    router.push({ pathname: "/lobby", query: { roomCode: room.code } }, "/");
  };

  return (
    <PageContainer>
      <Logo />
      <CodeInput
        onChange={e => {
          setRoomCode(e.target.value);
        }}
        placeholder="Room code"
      />
      <NameInput
        onChange={e => {
          setName(e.target.value);
        }}
        placeholder="Your name"
      />
      <Button>Enter room</Button>
      <CreateRoom onClick={createRoom}>Create a room</CreateRoom>
    </PageContainer>
  );
};

export default Index;
