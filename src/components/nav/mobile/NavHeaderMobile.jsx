import "./NavHeaderMobile.scss"
import React from 'react'
import {useGlobalState} from "/src/providers/GlobalStateProvider.jsx"
import {useData} from "/src/providers/DataProvider.jsx"
import LanguagePicker from "/src/components/widgets/LanguagePicker.jsx"
import ThemePicker from "/src/components/widgets/ThemePicker.jsx"
import NavHeader from "/src/components/nav/desktop/NavHeader.jsx"
import NavPills from "/src/components/nav/mobile/NavPills.jsx"
import Box from "/src/components/wrappers/Box.jsx"
// Icon import removed; using <i> tag for icon to avoid dependency issues.

function NavHeaderMobile() {
    const {getCategorySections} = useData()
    const {getActiveCategory} = useGlobalState()

    const category = getActiveCategory()
    const sections = getCategorySections(category)

    return (
        <Box nav={true} id={`nav-mobile-top`} className={`nav-mobile-top`}>
            <div className={`float-top-left`}>
                <a href="/react-portfolio-template/resume.pdf" target="_blank" rel="noopener noreferrer" title="View Resume">
                    <i className="fa fa-user" style={{ fontSize: '1.5em', color: '#007bff' }}></i>
                </a>
            </div>

            <div className={`float-top-right`}>
                <ThemePicker shrink={true}/>
            </div>

            <NavHeader shrink={false}/>

            <div className={`mt-4`}>
                {category && sections.length > 1 && (
                    <NavPills sections={sections}/>
                )}
            </div>
        </Box>
    )
}

export default NavHeaderMobile