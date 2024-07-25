import { ConfigProvider } from "antd";
import Router from "./routes/Router";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: "white",
        },
      }}>
      <Router />
    </ConfigProvider>
  );
}
