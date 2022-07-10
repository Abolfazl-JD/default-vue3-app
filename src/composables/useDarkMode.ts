const useDarkMode = () => {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    return {
        toggleDark,
        isDark
    }
}

export default useDarkMode