const omitZeroHour = (time: string) => time?.replace(/^00:/, '')

export { omitZeroHour }
