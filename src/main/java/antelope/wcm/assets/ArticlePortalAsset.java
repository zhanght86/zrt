package antelope.wcm.assets;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

import net.sf.json.JSONObject;

import antelope.db.DBUtil;
import antelope.wcm.entities.WCMAssetItem;

@Component
public class ArticlePortalAsset extends BaseAsset {

	@Override
	public String getAssetType() {
		return "3";
	}

	@Override
	public String getAssetTypeName() {
		return "首页文章";
	}

	@Override
	public String getAssetRelativePath() {
		return "articleportalasset";
	}

	@Override
	public String extractAssetData(WCMAssetItem assetItem, String sitesid) throws SQLException, Exception {
		return "";
	}

	@Override
	public int getAddPageWidth() {
		return 500;
	}

	@Override
	public int getAddPageHeight() {
		return 500;
	}

	@Override
	public int getConfigPageWidth() {
		return 300;
	}

	@Override
	public int getConfigPageHeight() {
		return 500;
	}

	@Override
	public void saveAsset(WCMAssetItem assetItem, String assetdatasymbol, HttpServletRequest req, HttpServletResponse res) throws Exception {
		assetItem.assetdata = assetdatasymbol.getBytes("utf-8");
	}

	@Override
	public boolean needToAdd() {
		return false;
	}

}