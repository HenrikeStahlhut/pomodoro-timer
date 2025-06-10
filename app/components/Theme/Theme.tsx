import { useContext, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AppContext } from "@/context/AppContext";

//! must have access to currentTheme, setCurrentTheme, handleChangeTheme

const ChooseTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("forest");
  const { setCurrentTheme } = useContext(AppContext);

  return (
    <>
      <div className="absolute right-10 bottom-10">
        <DropdownMenu>
          <DropdownMenuTrigger>Change Theme</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={selectedTheme}
              onValueChange={setSelectedTheme}
            >
              <DropdownMenuRadioItem value="forest">
                Forest
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="beach">Beach</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="cafe">Cafe</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="books">Books</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="library">
                Library
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mountains">
                Mountains
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="nightsky">
                Nightsky
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ChooseTheme;
