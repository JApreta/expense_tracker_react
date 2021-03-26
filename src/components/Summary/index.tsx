import { Container } from "./styles";
import incomeImg  from '../../assets/income.svg'
import outImg  from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>

            <div>
                <header>
                    <p>Income</p>
                <img src={incomeImg} alt="" />
                    
                    </header>
                <strong>$1000</strong>
            </div>
             <div>
                <header><p>Expense</p>
                <img src={outImg} alt="" />
                    </header>
                <strong>$100</strong>
            </div>
             <div className="highlight-background">
                <header><p>Total</p>
                <img src={totalImg} alt="" />
                    </header>
                <strong>$900</strong>
            </div>
        </Container>
       
    );
}