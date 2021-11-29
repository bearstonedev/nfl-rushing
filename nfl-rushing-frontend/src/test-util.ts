export function getSelectorFromName(name: string): string {
    let wordsInComponentName = name.split(/(?=[A-Z])/)
                                   .filter(word => word !== "Component")
                                   .map(word => word.toLowerCase());
    let selector = ["app"].concat(...wordsInComponentName)
                          .join('-');
    return selector;
  }