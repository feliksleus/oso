extern crate cbindgen;

use std::env;

fn main() {
    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();

    cbindgen::Builder::new()
        .with_crate(crate_dir)
        .with_language(cbindgen::Language::C)
        .with_no_includes()
        .with_item_prefix("polar_")
        .generate()
        .map(Some)
        .or_else(|err| {
            // Continue on syntax errors
            if let cbindgen::Error::ParseSyntaxError { .. } = err {
                Ok(None)
            } else if let cbindgen::Error::CargoMetadata { .. } = err {
                Ok(None)
            } else {
                Err(err)
            }
        })
        .expect("Unable to generate bindings")
        .map(|res| res.write_to_file("polar.h"));
}