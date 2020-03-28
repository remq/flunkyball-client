import { NextPage } from "next";
import { useEffect } from "react";
import socketIOClient from "socket.io-client";

const Index: NextPage = () => {
  useEffect(() => {
    const io = socketIOClient().io;
    io.connect();
  });
  return <h1>Lorem ipsum</h1>;
};

export default Index;
