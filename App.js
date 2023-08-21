function multiplyMatrices(matrix1, matrix2, mod) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      result[i][j] = 0;
      for (let k = 0; k < matrix2.length; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
        result[i][j] %= mod;
      }
    }
  }
  return result;
}
// Hill Cipher encryption function
function hillEncrypt(plainText, keyMatrix, mod) {
  const encryptedText = [];
  const matrixSize = keyMatrix.length;
  for (let i = 0; i < plainText.length; i += matrixSize) {
    const block = [];
    for (let j = 0; j < matrixSize; j++) {
        const charIndex = plainText.charCodeAt(i + j) - "A".charCodeAt(0);
      block.push(charIndex);
    }
    const encryptedBlock = multiplyMatrices([block], keyMatrix, mod)[0];
    for (let j = 0; j < encryptedBlock.length; j++) {
      encryptedText.push(
        String.fromCharCode(encryptedBlock[j] + "A".charCodeAt(0))
      );
    }
  }
  return encryptedText.join("");
}
// Example usage
function runHillCipher() {
  const plainText = document.getElementById("plaintext").value;
  const keyMatrix = [
    [2, 3],
    [1, 4],
  ]; // Constant key matrix
  const mod = 26;
  const encryptedText = hillEncrypt(plainText, keyMatrix, mod);
  var result = document.getElementById("encryptedText");
  result.textContent = encryptedText
}
runHillCipher();
