import {
  Container,
  Card,
  Input,
  Spacer,
  Row,
  Checkbox,
  Button,
  Text,
  useTheme,
} from "@nextui-org/react";

const Login = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: "100vh" }}
      >
        <Card css={{ mw: "420px", p: "20px" }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: "center",
              mb: "20px",
              borderBottom: `1px solid `,
              borderBottomColor: theme?.colors.primary,
            }}
          >
            Cal Dimoni{" "}
            <span style={{ color: `${theme?.colors.primary}` }}>Login</span>
          </Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
          <Spacer y={1} />
          <Row justify="flex-end">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
          </Row>
          <Spacer y={1} />
          <Button>Sign in</Button>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
