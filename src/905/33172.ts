export function $$n0(e, t, i) {
  return `<!DOCTYPE html>
<html>
  <head>
    <!-- CSP that prevents any HTTP requests or form actions -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; form-action 'none'; script-src 'unsafe-inline' 'unsafe-eval';">
    <script nonce="${e}">
      // Function to send a message to the parent window
      sendPostMessage = function(message) {
        parent.postMessage(message, '*');
      }

      window.addEventListener('message', function(event) {
        // Ignore the message if it's not from the expected origin
        if (event.origin !== '${t}') {
            console.error(\`ERROR: Received message from unexpected origin \${event.origin}\`);
            return;
        }

        if (event.data.type !== 'EVAL') {
          console.error(\`ERROR: Received message with unexpected type \${event.data.type}\`);
          return;
        }

        if (${i}) {
          try {
            const result = new Function(event.data.data)();

            // Send a message back to the parent window
            sendPostMessage({ type: 'EVAL_RESPONSE', data: result });
          } catch (e) {
            sendPostMessage({
              type: 'EVAL_RESPONSE', data: {
                result: 'ERROR',
                error: e.toString(),
                data: {
                  message: e.toString(),
                  error: {
                    type: 'TEMPLATE_EXECUTION_ERROR'
                  }
                }
              }
            });
          }
        } else {
          const script = document.createElement('script');
          script.nonce = '${e}';
          script.textContent = \`
            try {
              const result = (function() { \${event.data.data} })();
              sendPostMessage({ type: 'EVAL_RESPONSE', data: result });
            }  catch (e) {
              sendPostMessage({
                type: 'EVAL_RESPONSE', data: {
                  result: 'ERROR',
                  error: e.toString(),
                  data: {
                    message: e.toString(),
                    error: {
                      type: 'TEMPLATE_EXECUTION_ERROR'
                    }
                  }
                }
              });
            }
          \`;
          document.body.appendChild(script);
        }
      }, false);

      // Let the parent know that the iframe is ready to receive messages
      sendPostMessage({ type: 'IFRAME_READY' });
    </script>
  </head>
</html>`;
}
export const D = $$n0;