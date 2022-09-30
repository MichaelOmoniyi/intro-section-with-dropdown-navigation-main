let openNavDropdown = () => {
    document.querySelector('#navDropdown').style.display = 'block'
    document.querySelector('#jsBody').style.height = '100vh'
    document.querySelector('#jsBody').style.overflow = 'hidden'
}
let closeNavDropdown = () => {
    document.querySelector('#navDropdown').style.display = 'none'
}
// Toggle Mobile Feature Dropdown
let openFeatureDropdown = () => {
    document.querySelector('#FeatureDropdownImage').style.display = 'none'
    document.querySelector('#FeaturesDropupImage').style.display = 'inline-block'
    document.querySelector('#featureDropdown').style.display = 'block'
}
let closeFeatureDropdown = () => {
    document.querySelector('#FeatureDropdownImage').style.display = 'inline-block'
    document.querySelector('#FeaturesDropupImage').style.display = 'none'
    document.querySelector('#featureDropdown').style.display = 'none'
}
// Toggle Mobile Company Dropdown
let openCompanyDropdown = () => {
    document.querySelector('#CompanyDropdownImage').style.display = 'none'
    document.querySelector('#CompanyDropUpImage').style.display = 'inline-block'
    document.querySelector('#companyDropdown').style.display = 'block'
}
let closeCompanyDropdown = () => {
    document.querySelector('#CompanyDropdownImage').style.display = 'inline-block'
    document.querySelector('#CompanyDropUpImage').style.display = 'none'
    document.querySelector('#companyDropdown').style.display = 'none'
}
// Toggle Desktop Feature Dropdown
let openDesktopFeatures = () => {
    document.querySelector('#desktopFeatureDropdownImage').style.display = 'none'
    document.querySelector('#desktopFeatureDropUpImage').style.display = 'inline-block'
    document.querySelector('#desktopFeatures').style.display = 'block'
}
let closeDesktopFeatures = () => {
    document.querySelector('#desktopFeatureDropdownImage').style.display = 'inline-block'
    document.querySelector('#desktopFeatureDropUpImage').style.display = 'none'
    document.querySelector('#desktopFeatures').style.display = 'none'
}
// Toggle Desktop Company Dropdown
let openDesktopCompany = () => {
    document.querySelector('#desktopCompanyDropdownImage').style.display = 'none'
    document.querySelector('#desktopCompanyDropUpImage').style.display = 'inline-block'
    document.querySelector('#desktopCompany').style.display = 'block'
}
let closeDesktopCompany = () => {
    document.querySelector('#desktopCompanyDropdownImage').style.display = 'inline-block'
    document.querySelector('#desktopCompanyDropUpImage').style.display = 'none'
    document.querySelector('#desktopCompany').style.display = 'none'
}