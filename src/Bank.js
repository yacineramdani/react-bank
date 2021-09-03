import React, { useState } from "react";
const Bank = () => {
    const [balance, setBalance] = useState (100);
    const [Va, setVa] = useState(0);
    const [Vb, setVb] = useState(0);
    const [Vc, setVc] = useState(0);

    const handleChangeA = (e) => {
        setVa (e.target.value)
    }
    const handleChangeB = (e) => {
        setVb (e.target.value)
    }
    const handleChangeC = (e) => {
        setVc (e.target.value)
    }

    return (
        <div>
            <h1>Bienvenue dans l'espace client de votre banque</h1>
            <p>Votre solde est: {balance}$</p>
            <h2>Nos services</h2>
            <div className="inputs">
                <div className="rechargement">
                    <p>Recharger votre compte</p>
                    <form onSubmit={(e)=>{ e.preventDefault(); setBalance (balance +parseInt(Va) );setVa("")}}>
                        <input type="number" placeholder="Montant" onChange={handleChangeA} value={Va}/>
                        <input type="submit" value="Recharger" />
                    </form>
                </div>


                <div className="virement">
                    <p>Virement</p>
                    <form onSubmit={(e)=>{ e.preventDefault();  balance>Vb ? setBalance (balance-parseInt(Vb) ): alert("Credit insuffisant");
                    setVb("")
                    }}>
                        <input type="number" placeholder="Montant" onChange={handleChangeB} value={Vb} />
                        <input type="submit" value="Recharger" />
                    </form>
                </div>


                <div >
                    <p>Recharge telephone</p>
                    <form onSubmit={(e)=>{e.preventDefault();balance>Vc ? setBalance (balance-parseInt(Vc)   ): alert("Credit insuffisant");
                    setVc("")
                    }}>
                        <input type="number" placeholder="Montant" onChange={handleChangeC} value={Vc}/>
                        <input type="submit" value="Recharger"/>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Bank;