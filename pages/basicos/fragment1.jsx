import React from 'react'

export default function fragment() {
    return (
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>
    )
}

/*
        Envolver dentro de uma tag os elementos adjacentes

        Problema:
            <h1>Título</h1>
            <h2>Subtítulo</h2>

        Solução: A
        <div>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </div>

        Solução: B  
        import React from 'react'
        
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>

        */