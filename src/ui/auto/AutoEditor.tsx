import React from "react";
import { useState } from "react"

interface Props {
    code?: string
}

export const Auto = (props: Props) => {
    const [code, setCode] = useState(props.code ?? '');
    const [error, setError] = useState<false | string>(false);
    const [lastValidCode, setLastValidCode] = useState(props.code ?? '');

    return <textarea>
        {code}
    </textarea>
}