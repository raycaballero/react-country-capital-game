import { useState, useEffect } from 'react'

function CountryCapitalGame({ data }) {
    const [options, setOptions] = useState([])
    const [firstSelected, setFirstSelected] = useState(null)

    useEffect(() => {
        const rawOptions = [...Object.values(data), ...Object.keys(data)];

        // Randomize (not deterministic but works)
        rawOptions.sort(() => Math.random() - 0.5);

        const tempOptions = {};

        rawOptions.forEach((item) => {
            tempOptions[item] = '#5F5F5F';
        });

        setOptions(tempOptions);
    }, [data]);

    const handleClick = x => {
        const tempOptions = options

        if (!firstSelected) {
            Object.keys(tempOptions).forEach(key => {
                tempOptions[key] = '#5F5F5F';
            });

            setFirstSelected(x)

            setOptions({
                ...tempOptions,
                [x]: '#0000FF'
            })
        } else {
            if (x === firstSelected) return

            if (x === (data[firstSelected] || Object.keys(data).find((country) => data[country] === firstSelected))) {
                delete tempOptions[firstSelected]
                delete tempOptions[x]

                setOptions(tempOptions);

                // setOptions(tempOptions)
            } else {
                setOptions({
                    ...tempOptions,
                    [firstSelected]: '#FF0000',
                    [x]: '#FF0000',
                })
            }

            setFirstSelected(null)
        }
    }

    return (
        <div className="container">
            <h1>Country Capital Game</h1>
            <div className="container">
                {
                    Object.keys(options).length === 0
                        ? 'Congratulations'
                        : Object.keys(options).map((x, i) =>
                            <button
                                key={i}
                                type="button"
                                onClick={() => handleClick(x)}
                                style={{
                                    backgroundColor: options[x],
                                    color: '#ffffff'
                                }}
                            >
                                {x}
                            </button>
                        )
                }
            </div>
        </div>
    );
}

export default CountryCapitalGame;
