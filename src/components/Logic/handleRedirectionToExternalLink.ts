const handleRedirectionToExternalLink = (url: string ): void => {
    window.open(url, '_blank');
}

export {handleRedirectionToExternalLink}