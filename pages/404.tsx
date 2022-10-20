import { useRouter } from "next/router";
import Button from "../components/Button";
import MainWrapper from "../components/MainWrapper";
import Title from "../components/Title";

const Page404 = () => {
  const router = useRouter();
  return (
    <MainWrapper>
      <Title>Erro 404:Jogo não encontrado!</Title>
      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Ir para a página principal
      </Button>
    </MainWrapper>
  );
};

export default Page404;
