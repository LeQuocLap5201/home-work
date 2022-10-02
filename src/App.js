import logo from "./logo.svg";
import "./App.css";
import { Button, Space } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Count1 from "./Count1";
import Count2 from "./Count2";
import { useDispatch } from "./redux/hooks";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Space>
          <Count1 />
          <Count2 />
        </Space>
        <br />
        <Space>
          <Button
            style={{ width: 110 }}
            type="primary"
            icon={<ArrowUpOutlined />}
            onClick={() => dispatch({ type: "COUNT1" })}
          >
            Count 1
          </Button>
          <Button
            style={{ width: 110 }}
            type="primary"
            icon={<ArrowUpOutlined />}
            onClick={() => dispatch({ type: "COUNT2" })}
          >
            Count 2
          </Button>
        </Space>
      </header>
    </div>
  );
}

export default App;
