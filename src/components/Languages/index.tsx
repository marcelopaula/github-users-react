import { useEffect, useState } from "react";
import { getLanguages } from "@/services/Repositories";
import { Stack, Chip } from "@mui/material";

interface LanguagesProps {
  url: string
}


const Languages = ({url}: LanguagesProps) => {
  const [languages, setLanguages] = useState<string[]>();

  const load = async () => {
    let result = await getLanguages(url);
    setLanguages(Object.keys(result.data))
  }

  useEffect(() => {
    load();
  }, [])

  return (
    <Stack direction='row' spacing={1}>
      {
        languages &&
          languages.map((lang: string, i: number) => (
            <Chip key={i} label={lang} />
          ))      
      }
    </Stack>    

  )
}

export default Languages;