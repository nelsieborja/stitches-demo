import { useState } from "react";
import { globalStyles, styled, darkTheme } from "./stitches.config";

const Button = styled("button", {
  // base styles
  borderRadius: "9999px",
  border: 0,
  // using a color token
  color: "$white",
  cursor: "pointer",
  margin: 2,

  variants: {
    color: {
      blue: {
        $$color: "$colors$blue",
        backgroundColor: "$$color",
        "&:hover": {
          $$color: "$colors$lightBlue"
        }
      },
      green: {
        // create locally scoped tokens by defining them with a $$
        $$color: "$colors$green",
        backgroundColor: "$$color",

        "&:hover": {
          $$color: "$colors$lightGreen"
        }
      }
    },
    size: {
      small: {
        fontSize: 12,
        px: 12, // using a custom util
        py: 8
      },
      medium: {
        fontSize: 14,
        px: 14,
        py: 10
      },
      large: {
        fontSize: 16,
        px: 16,
        py: 12
      }
    }
  },

  defaultVariants: {
    color: "blue",
    size: "medium"
  }
});

const CustomButton = styled(Button, {
  borderRadius: 3,
  fontWeight: 600,
  width: "99%",

  variants: {
    outlined: {
      true: {
        boxShadow: "inset 0 0 0 2px #000"
      }
    }
  }
});

const Flex = styled("div", {});

export default function App() {
  const [outlined, setOutlined] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [width, setWidth] = useState("200px");

  globalStyles();

  return (
    <div className={darkmode && darkTheme}>
      COLOR:
      <br />
      <Button>default</Button>
      <Button color="green">color="green"</Button>
      <br />
      <br />
      SIZE:
      <br />
      <Button size="small">size="small"</Button>
      <Button>default</Button>
      <Button size="large">size="large"</Button>
      <br />
      <br />
      RESPONSIVE:
      <br />
      <Button
        color={{
          "@initial": "blue",
          "@bp1": "green"
        }}
      >
        Changes color based on breakpoint
      </Button>
      <br />
      <br />
      COMPOSED COMPONENT:
      <br />
      <CustomButton color="green" size="large">
        Custom Button
      </CustomButton>
      <br />
      <br />
      DYNAMIC STYLES:
      <br />
      <CustomButton onClick={() => setDarkmode(!darkmode)}>
        Click to toggle dark mode
      </CustomButton>
      <CustomButton outlined={outlined} onClick={() => setOutlined(!outlined)}>
        Click to toggle border
      </CustomButton>
      <Flex css={{ display: "flex" }}>
        <select onChange={({ target: { value } }) => setWidth(value)}>
          <option value="200px">200px</option>
          <option value="400px">400px</option>
        </select>
        <CustomButton css={{ width }}>Width: {width}</CustomButton>
      </Flex>
    </div>
  );
}
