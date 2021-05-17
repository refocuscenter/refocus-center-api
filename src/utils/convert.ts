export function toBoolean(str: string | undefined): boolean {
	return str?.toLowerCase() === "true";
}

export function toBase64Png(buffer: Buffer) {
	return "data:image/png;base64," + buffer.toString("base64");
}
