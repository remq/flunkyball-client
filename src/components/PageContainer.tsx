import styled from "styled-components";

const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.contentMaxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px;
`;

export default PageContainer;
