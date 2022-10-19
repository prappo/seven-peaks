import { Logo, SearchBox } from '../../components';
import './index.scss';

const Header = () => {

    return (
        <>
            <header className="seven-peaks-header">
                <div className="container">
                    <div className="row seven-peaks-header-row align-items-center">

                        <div className="col">
                            <Logo />
                        </div>

                        <div className='col align-self-end'>
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </header>
            <div className='seven-peaks-header-spacer'></div>
        </>
    )
}
export default Header;